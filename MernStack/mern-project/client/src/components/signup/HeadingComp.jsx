import React from 'react'

const HeadingComp = ({first, secound}) => {
  return (
    <div>
      {" "}
      <h1 className="text-center sign-up-heading ">
        {first} <br /> {secound}
      </h1>
    </div>
  );
}

export default HeadingComp