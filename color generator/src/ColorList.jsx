/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import { SingleColor } from "./SingleColor";

// eslint-disable-next-line react/prop-types
export const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((col, index) => {
        return <SingleColor col={col} index={index} key={nanoid()} />;
      })}
    </section>
  );
};
