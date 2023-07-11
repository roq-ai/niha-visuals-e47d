import { UserInterface } from 'interfaces/user';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface DesignInterface {
  id?: string;
  name: string;
  content: string;
  user_id?: string;
  business_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  business?: BusinessInterface;
  _count?: {};
}

export interface DesignGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  content?: string;
  user_id?: string;
  business_id?: string;
}
