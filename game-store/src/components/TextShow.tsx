import { useState } from "react";
import { Button } from "react-bootstrap";

interface Props{
    children:string|undefined;
}


function TextShowMoreLess({children}:Props){

    if (children === undefined) return null;

    const [expanded,setExpanded]=useState(false);

    if (children.length<=350){ return <p>{children}</p>;}
    else if (expanded){return (
      <>
        <p>
          {children}{" "}
          <Button
            type="button"
            className="btn btn-secondary"
            onClick={() => setExpanded(!expanded)}
          >
            Show less
          </Button>
        </p>
      </>
    );}
    else{return (
      <>
        <p>
          {children.substring(0, 350) + "..."}{" "}
          <Button
            type="button"
            className="btn btn-secondary"
            onClick={() => setExpanded(!expanded)}
          >
            Show more
          </Button>
        </p>
      </>
    );}


}

export default TextShowMoreLess;