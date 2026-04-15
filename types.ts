export type TaskStatus = 'todo' | 'in-progress' | 'completed' | 'delayed' | 'cancelled';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';
export type TaskCategory = 'maintenance' | 'safety' | 'incident' | 'improvement' | 'inspection' | 'training' | 'other';

export interface User {
  id: string;
  name: string;
  role: 'admin' | 'manager' | 'lead' | 'technician' | 'viewer';
  avatar?: string;
  email: string;
}

export interface CableLine {
  id: string;
  name: string;
  description: string;
  status: 'operational' | 'maintenance' | 'stopped';
  location: string;
}

export interface Equipment {
  id: string;
  name: string;
  cableLineId: string;
}

export interface TaskLog {
  id: string;
  userId: string;
  timestamp: string;
  action: string;
  details: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  category: TaskCategory;
  status: TaskStatus;
  priority: TaskPriority;
  assigneeId: string;
  dueDate: string;
  startDate?: string;
  completedDate?: string;
  progress: number; // 0-100
  cableLineId: string;
  equipmentId?: string;
  attachments: string[];
  logs: TaskLog[];
  delayReason?: string;
  kpiScore?: number;
}

export interface KPI {
  userId: string;
  month: number;
  year: number;
  completionRate: number;
  delayedTasks: number;
  incidentResponseTime: number; // in minutes
  totalScore: number;
}
