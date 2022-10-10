export interface Message {
  id: string
  message: string
  userId: string
  createdAt: string
}
export type CreateMessagePayload = Omit<Message, 'id'>
