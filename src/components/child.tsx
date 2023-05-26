import { useContext } from 'react';
import { Context } from '../pages/context';

export default function Child() {
  const value = useContext(Context);
  return <div className='card'>{value}</div>;
}
