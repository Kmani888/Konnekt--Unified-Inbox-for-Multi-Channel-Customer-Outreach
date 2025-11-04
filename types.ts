export enum ChannelType {
  SMS = 'sms',
  WhatsApp = 'whatsapp',
  Email = 'email',
  Twitter = 'twitter',
}

export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
}

export interface Contact {
  id: string;
  name: string;
  avatarUrl: string;
  phone: string;
  email: string;
  lastMessage: string;
  lastMessageTimestamp: string;
  unreadCount: number;
}

export interface Message {
  id:string;
  contactId: string;
  text: string;
  timestamp: string;
  direction: 'incoming' | 'outgoing';
  channel: ChannelType;
  subject?: string;
}