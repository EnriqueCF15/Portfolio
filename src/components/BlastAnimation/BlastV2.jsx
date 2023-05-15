import "./blast.scss";
import TextSpan from "./TextSpan";

export default function BlastV({ letterClass, arrayStr, indexLetter }) {
  return (
    <span>
      {arrayStr.map((char, index) => {
        return (
          <TextSpan
            key={char + index}
            letterClass={letterClass}
            indexLetter={indexLetter}
            index={index}
          >
            {char}
          </TextSpan>
        );
      })}
    </span>
  );
}
