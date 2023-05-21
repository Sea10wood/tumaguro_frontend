/* eslint-disable */
export type AuthInfo = {
  jwt: string
}

export type DeleteInvitationResult = {
  status: string
}

export type DeleteScheduleResult = {
  status: string
}

export type DeleteTaskResult = {
  status: string
}

export type GetInvitationResult = {
  invitations: GetInvitationResultOne[]
}

export type GetInvitationResultOne = {
  created_at: string
  id: string
  sender_email: string
  schedule: Schedule
}

export type GetScheduleResult = {
  schedules: Schedule[]
}

export type GetTaskResult = {
  tasks: Task[]
}

export type HTTPValidationError = {
  detail?: ValidationError[] | undefined
}

export type Invitation = {
  id: string
  created_at: string
  recipient_email: string
}

export type PostInvitation = {
  recipient_email: string
  schedule_id: string
}

export type PostSchedule = {
  title: string
  start: string
  end: string
  comment: string
}

export type PostTask = {
  title: string
  dead_line: string
  comment: string
}

export type ReceptInvitation = {
  is_recept: boolean
}

export type ReceptInvitationResult = {
  status: string
}

export type Schedule = {
  id: string
  title: string
  start: string
  end: string
  created_at: string
  user_id: string
  comment: string
}

export type SigninUser = {
  email: string
  password: string
}

export type SignupUser = {
  email: string
  username: string
  password: string
}

export type Task = {
  id: string
  title: string
  finished_at?: string | undefined
  created_at: string
  dead_line: string
  user_id: string
  comment: string
}

export type UpdateUser = {
  username: string
}

export type User = {
  id: string
  email: string
  username: string
}

export type ValidationError = {
  loc: (Partial<string & number>)[]
  msg: string
  type: string
}
