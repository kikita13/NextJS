import Image from "next/image";
import { useDispatch } from "react-redux";
import { toggleTodo } from "store/slices/TodoSlice";

export const DoneTodo = ( { id } ) => {
  const dispatch = useDispatch();
  return (
    <Image
      src='/check-square.svg'
      width={20}
      height={20}
      onClick={() => dispatch(toggleTodo({id}))}
    />
  );
};
