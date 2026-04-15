import { Task, User, CableLine, Equipment, KPI } from './types';
import { subDays, addDays, format } from 'date-fns';

export const users: User[] = [
  { id: 'u1', name: 'Nguyễn Văn A', role: 'manager', email: 'a@cable.com', avatar: 'https://i.pravatar.cc/150?u=u1' },
  { id: 'u2', name: 'Trần Thị B', role: 'lead', email: 'b@cable.com', avatar: 'https://i.pravatar.cc/150?u=u2' },
  { id: 'u3', name: 'Lê Văn C', role: 'technician', email: 'c@cable.com', avatar: 'https://i.pravatar.cc/150?u=u3' },
  { id: 'u4', name: 'Phạm Văn D', role: 'technician', email: 'd@cable.com', avatar: 'https://i.pravatar.cc/150?u=u4' },
];

export const cableLines: CableLine[] = [
  { id: 'l1', name: 'Tuyến 1: Ga Đại Dương - Ga Mặt Trời', description: 'Tuyến cáp treo chính', status: 'operational', location: 'Hạ Long' },
  { id: 'l2', name: 'Tuyến 2: Ga Núi - Ga Biển', description: 'Tuyến cáp treo phụ', status: 'maintenance', location: 'Hòn Gai' },
];

export const equipments: Equipment[] = [
  { id: 'e1', name: 'Cabin số 01', cableLineId: 'l1' },
  { id: 'e2', name: 'Trụ T1', cableLineId: 'l1' },
  { id: 'e3', name: 'Động cơ chính', cableLineId: 'l1' },
  { id: 'e4', name: 'Hệ thống phanh', cableLineId: 'l2' },
];

export const tasks: Task[] = [
  {
    id: 't1',
    title: 'Bảo trì định kỳ Động cơ chính',
    description: 'Kiểm tra dầu, vệ sinh và siết chặt các bulong.',
    category: 'maintenance',
    status: 'completed',
    priority: 'high',
    assigneeId: 'u3',
    dueDate: format(subDays(new Date(), 1), 'yyyy-MM-dd'),
    completedDate: format(subDays(new Date(), 1), 'yyyy-MM-dd'),
    progress: 100,
    cableLineId: 'l1',
    equipmentId: 'e3',
    attachments: [],
    logs: [],
    kpiScore: 95,
  },
  {
    id: 't2',
    title: 'Kiểm tra an toàn kẹp cáp Cabin 01',
    description: 'Kiểm tra lực kẹp và độ mòn của má phanh kẹp.',
    category: 'safety',
    status: 'in-progress',
    priority: 'urgent',
    assigneeId: 'u4',
    dueDate: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
    progress: 60,
    cableLineId: 'l1',
    equipmentId: 'e1',
    attachments: [],
    logs: [],
  },
  {
    id: 't3',
    title: 'Khắc phục sự cố cảm biến gió',
    description: 'Cảm biến gió tại trụ T1 báo lỗi không ổn định.',
    category: 'incident',
    status: 'todo',
    priority: 'high',
    assigneeId: 'u3',
    dueDate: format(new Date(), 'yyyy-MM-dd'),
    progress: 0,
    cableLineId: 'l1',
    equipmentId: 'e2',
    attachments: [],
    logs: [],
  },
  {
    id: 't4',
    title: 'Đào tạo an toàn lao động quý 2',
    description: 'Tập huấn kỹ năng cứu hộ trên cao.',
    category: 'training',
    status: 'todo',
    priority: 'medium',
    assigneeId: 'u2',
    dueDate: format(addDays(new Date(), 10), 'yyyy-MM-dd'),
    progress: 0,
    cableLineId: 'l1',
    attachments: [],
    logs: [],
  },
  {
    id: 't5',
    title: 'Kiểm định cáp tải Tuyến 2',
    description: 'Thuê đơn vị kiểm định độc lập kiểm tra độ giãn cáp.',
    category: 'inspection',
    status: 'delayed',
    priority: 'high',
    assigneeId: 'u2',
    dueDate: format(subDays(new Date(), 2), 'yyyy-MM-dd'),
    progress: 20,
    cableLineId: 'l2',
    attachments: [],
    logs: [],
    delayReason: 'Đơn vị kiểm định bận lịch đột xuất.',
  },
];

export const kpis: KPI[] = [
  { userId: 'u3', month: 4, year: 2024, completionRate: 92, delayedTasks: 1, incidentResponseTime: 15, totalScore: 88 },
  { userId: 'u4', month: 4, year: 2024, completionRate: 85, delayedTasks: 2, incidentResponseTime: 20, totalScore: 82 },
];
