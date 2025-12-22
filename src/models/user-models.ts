interface User {
  email: string;
  role: 'admin' | 'user';
  password: string;
}
export type { User };
