import { mockContacts, mockMessages } from './constants';
import type { Contact, Message, User } from './types';

// Simulate network latency
const networkDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// This is our in-memory "database" for messages, so we can add to it.
// We create a copy so the original constant is not mutated.
let messagesStore: Message[] = JSON.parse(JSON.stringify(mockMessages));
let contactsStore: Contact[] = JSON.parse(JSON.stringify(mockContacts));


export const login = async (userInfo: { name: string; phone: string; email: string; }): Promise<User> => {
  await networkDelay(500);
  console.log('API: Logging in user', userInfo.name);
  const user: User = {
    id: `user-${Date.now()}`,
    ...userInfo,
  };
  return user;
};

export const getContacts = async (): Promise<Contact[]> => {
  await networkDelay(1200);
  console.log('API: Fetching contacts');
  // Return a copy to prevent mutation of the store directly from outside
  return JSON.parse(JSON.stringify(contactsStore));
};

export const getMessages = async (): Promise<Message[]> => {
  await networkDelay(1500);
  console.log('API: Fetching messages');
  // Return a copy
  return JSON.parse(JSON.stringify(messagesStore));
};

export const postMessage = async (
  messageData: Omit<Message, 'id' | 'timestamp' | 'direction'>
): Promise<Message> => {
  await networkDelay(400);
  
  const newMessage: Message = {
    id: `msg_${Date.now()}`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    direction: 'outgoing',
    ...messageData
  };
  
  console.log('API: Posting new message', newMessage);
  messagesStore.push(newMessage);

  // Also update the last message for the relevant contact
  const contactIndex = contactsStore.findIndex(c => c.id === newMessage.contactId);
  if (contactIndex !== -1) {
    contactsStore[contactIndex].lastMessage = newMessage.text;
    contactsStore[contactIndex].lastMessageTimestamp = 'Just now';
  }

  return newMessage;
};
