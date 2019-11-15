import React from "react";
import Button from "react-bootstrap/Button"

function Sort(props){
    return(
        <Button className="col-sm-2 offset-5" variant="primary" type="submit" onClick={props.handleSort}>
        Sort by Age
        </Button>
    )
}

export default Sort;