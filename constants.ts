import type { Contact, Message } from './types';
import { ChannelType } from './types';

export const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    avatarUrl: 'https://picsum.photos/seed/alice/100/100',
    phone: '+1 (555) 123-4567',
    email: 'alice.j@example.com',
    lastMessage: 'Sounds good! I will check it out.',
    lastMessageTimestamp: '10:42 AM',
    unreadCount: 2,
  },
  {
    id: '2',
    name: 'Bob Williams',
    avatarUrl: 'https://picsum.photos/seed/bob/100/100',
    phone: '+1 (555) 987-6543',
    email: 'bob.w@example.com',
    lastMessage: 'Can you resend the invoice?',
    lastMessageTimestamp: 'Yesterday',
    unreadCount: 0,
  },
  {
    id: '3',
    name: 'Charlie Brown',
    avatarUrl: 'https://picsum.photos/seed/charlie/100/100',
    phone: '+1 (555) 234-5678',
    email: 'charlie.b@example.com',
    lastMessage: 'Thanks for your help!',
    lastMessageTimestamp: 'Wednesday',
    unreadCount: 0,
  },
  {
    id: '4',
    name: 'Olivia Martinez',
    avatarUrl: 'https://picsum.photos/seed/olivia/100/100',
    phone: '+1 (555) 111-2222',
    email: 'olivia.m@example.com',
    lastMessage: 'Perfect, see you then!',
    lastMessageTimestamp: 'Tuesday',
    unreadCount: 0,
  },
  {
    id: '5',
    name: 'David Chen',
    avatarUrl: 'https://picsum.photos/seed/david/100/100',
    phone: '+1 (555) 333-4444',
    email: 'david.c@example.com',
    lastMessage: 'I have attached the signed documents.',
    lastMessageTimestamp: 'Monday',
    unreadCount: 1,
  },
  {
    id: '6',
    name: 'Sophia Rodriguez',
    avatarUrl: 'https://picsum.photos/seed/sophia/100/100',
    phone: '+1 (555) 555-6666',
    email: 'sophia.r@example.com',
    lastMessage: 'No problem at all.',
    lastMessageTimestamp: 'Monday',
    unreadCount: 0,
  },
    {
    id: '7',
    name: 'James Wilson',
    avatarUrl: 'https://picsum.photos/seed/james/100/100',
    phone: '+1 (555) 777-8888',
    email: 'james.w@example.com',
    lastMessage: 'Let\'s touch base next week.',
    lastMessageTimestamp: 'Friday',
    unreadCount: 0,
  },
  {
    id: '8',
    name: 'Isabella Garcia',
    avatarUrl: 'https://picsum.photos/seed/isabella/100/100',
    phone: '+1 (555) 999-0000',
    email: 'isabella.g@example.com',
    lastMessage: 'Could you confirm the meeting time?',
    lastMessageTimestamp: 'Thursday',
    unreadCount: 3,
  },
  {
    id: '9',
    name: 'Daniel Kim',
    avatarUrl: 'https://picsum.photos/seed/daniel/100/100',
    phone: '+1 (555) 121-2323',
    email: 'daniel.k@example.com',
    lastMessage: 'Hey, I just got your message.',
    lastMessageTimestamp: 'Thursday',
    unreadCount: 0,
  },
  {
    id: '10',
    name: 'Emily White',
    avatarUrl: 'https://picsum.photos/seed/emily/100/100',
    phone: '+1 (555) 343-4545',
    email: 'emily.w@example.com',
    lastMessage: 'That\'s fantastic news!',
    lastMessageTimestamp: 'Wednesday',
    unreadCount: 0,
  },
];

export const mockMessages: Message[] = [
  // Conversation with Alice
  { id: 'm1', contactId: '1', text: 'Hi Alice, just following up on our conversation.', timestamp: '10:40 AM', direction: 'outgoing', channel: ChannelType.SMS },
  { id: 'm2', contactId: '1', text: 'Hey! Yes, I got the documents.', timestamp: '10:41 AM', direction: 'incoming', channel: ChannelType.SMS },
  { id: 'm3', contactId: '1', text: 'Sounds good! I will check it out.', timestamp: '10:42 AM', direction: 'incoming', channel: ChannelType.SMS },
  { id: 'm8', contactId: '1', text: 'Also, regarding the project update, can we sync tomorrow?', timestamp: '10:50 AM', direction: 'outgoing', channel: ChannelType.Email, subject: 'Project Update' },
  { id: 'm9', contactId: '1', text: 'Yes, tomorrow works for me. Let me know what time.', timestamp: '11:05 AM', direction: 'incoming', channel: ChannelType.Email, subject: 'Re: Project Update' },

  // Conversation with Bob
  { id: 'm4', contactId: '2', text: 'Hello Bob, your appointment is confirmed for Friday.', timestamp: 'Yesterday', direction: 'outgoing', channel: ChannelType.WhatsApp },
  { id: 'm5', contactId: '2', text: 'Great, thank you. Can you resend the invoice?', timestamp: 'Yesterday', direction: 'incoming', channel: ChannelType.WhatsApp },
  { id: 'm10', contactId: '2', text: 'Of course, I\'ve just sent it to your email.', timestamp: 'Yesterday', direction: 'outgoing', channel: ChannelType.WhatsApp },
  { id: 'm11', contactId: '2', text: 'Hi Bob, please find the attached invoice as requested.', timestamp: 'Yesterday', direction: 'outgoing', channel: ChannelType.Email, subject: 'Invoice #INV-2024-001' },
  { id: 'm12', contactId: '2', text: 'Got it, thanks!', timestamp: 'Yesterday', direction: 'incoming', channel: ChannelType.Email, subject: 'Re: Invoice #INV-2024-001' },


  // Conversation with Charlie
  { id: 'm6', contactId: '3', text: 'Hi Charlie, here is the link you requested: https://example.com', timestamp: 'Wednesday', direction: 'outgoing', channel: ChannelType.Email, subject: 'Requested Link' },
  { id: 'm7', contactId: '3', text: 'Thanks for your help!', timestamp: 'Wednesday', direction: 'incoming', channel: ChannelType.Email, subject: 'Re: Requested Link' },
  { id: 'm13', contactId: '3', text: 'Quick question about the docs.', timestamp: 'Tuesday', direction: 'incoming', channel: ChannelType.SMS },
  { id: 'm14', contactId: '3', text: 'I\'m here to help, what\'s your question?', timestamp: 'Tuesday', direction: 'outgoing', channel: ChannelType.SMS },

  // Conversation with Olivia Martinez (4)
  { id: 'm15', contactId: '4', text: 'Hey Olivia, are we still on for lunch at 1pm?', timestamp: 'Tuesday', direction: 'outgoing', channel: ChannelType.WhatsApp },
  { id: 'm16', contactId: '4', text: 'Hi! Yes, absolutely. Looking forward to it.', timestamp: 'Tuesday', direction: 'incoming', channel: ChannelType.WhatsApp },
  { id: 'm17', contactId: '4', text: 'Perfect, see you then!', timestamp: 'Tuesday', direction: 'outgoing', channel: ChannelType.WhatsApp },

  // Conversation with David Chen (5)
  { id: 'm18', contactId: '5', text: 'Hello David, I\'ve reviewed the proposal and have a few questions.', timestamp: 'Monday', direction: 'outgoing', channel: ChannelType.Email, subject: 'Proposal Review' },
  { id: 'm19', contactId: '5', text: 'Great. Feel free to send them over whenever you\'re ready.', timestamp: 'Monday', direction: 'incoming', channel: ChannelType.Email, subject: 'Re: Proposal Review' },
  { id: 'm20', contactId: '5', text: 'I have attached the signed documents.', timestamp: 'Monday', direction: 'incoming', channel: ChannelType.Email, subject: 'Re: Proposal Review' },

  // Conversation with Sophia Rodriguez (6)
  { id: 'm21', contactId: '6', text: 'Your package has been delivered.', timestamp: 'Monday', direction: 'outgoing', channel: ChannelType.SMS },
  { id: 'm22', contactId: '6', text: 'Thank you for the update!', timestamp: 'Monday', direction: 'incoming', channel: ChannelType.SMS },
  { id: 'm23', contactId: '6', text: 'No problem at all.', timestamp: 'Monday', direction: 'outgoing', channel: ChannelType.SMS },

  // Conversation with James Wilson (7)
  { id: 'm24', contactId: '7', text: 'Did you get a chance to look at the quarterly report?', timestamp: 'Friday', direction: 'outgoing', channel: ChannelType.WhatsApp },
  { id: 'm25', contactId: '7', text: 'Not yet, but it\'s on my list for this afternoon.', timestamp: 'Friday', direction: 'incoming', channel: ChannelType.WhatsApp },
  { id: 'm26', contactId: '7', text: 'Sounds good. Let\'s touch base next week.', timestamp: 'Friday', direction: 'outgoing', channel: ChannelType.WhatsApp },

  // Conversation with Isabella Garcia (8)
  { id: 'm27', contactId: '8', text: 'This is a reminder for your appointment tomorrow at 10 AM.', timestamp: 'Thursday', direction: 'outgoing', channel: ChannelType.SMS },
  { id: 'm28', contactId: '8', text: 'Received, thank you!', timestamp: 'Thursday', direction: 'incoming', channel: ChannelType.SMS },
  { id: 'm29', contactId: '8', text: 'Could you confirm the meeting time?', timestamp: 'Thursday', direction: 'incoming', channel: ChannelType.Email, subject: 'Meeting Confirmation' },

  // Conversation with Daniel Kim (9)
  { id: 'm30', contactId: '9', text: 'Hi Daniel, welcome to the team! Let me know if you need anything to get started.', timestamp: 'Thursday', direction: 'outgoing', channel: ChannelType.Email, subject: 'Welcome!' },
  { id: 'm31', contactId: '9', text: 'Hey, I just got your message. Thanks! I\'ll reach out if I have questions.', timestamp: 'Thursday', direction: 'incoming', channel: ChannelType.Email, subject: 'Re: Welcome!' },

  // Conversation with Emily White (10)
  { id: 'm32', contactId: '10', text: 'Congratulations on the successful launch!', timestamp: 'Wednesday', direction: 'outgoing', channel: ChannelType.WhatsApp },
  { id: 'm33', contactId: '10', text: 'Thank you so much! The team did an amazing job.', timestamp: 'Wednesday', direction: 'incoming', channel: ChannelType.WhatsApp },
  { id: 'm34', contactId: '10', text: 'That\'s fantastic news!', timestamp: 'Wednesday', direction: 'outgoing', channel: ChannelType.WhatsApp },
];