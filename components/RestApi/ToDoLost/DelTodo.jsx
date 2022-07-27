import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeTodo } from "store/slices/TodoSlice";

export const DelTodo = ( {id} ) => {
  const dispatch = useDispatch();
  return (
    <Image
      src='/trash.svg'
      width={20}
      height={20}
      onClick={() => dispatch(removeTodo({id}))}
    />
  );
};
