import React from "react";
import classes from './AddMovie.module.css'


const AddMovie =() =>{
    return(
        <form>
            <div className={classes.control}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title"/>

            </div>
            <div className={classes.control}>
                <label htmlFor="openingtext">Opening-Text</label>
                <textarea type="text" id="openingtext" row='5'/>

            </div>
            <div className={classes.control}>
                <label htmlFor="date">Date</label>
                <input type="text" id="date"/>

            </div>
        </form>
    )

}
export default AddMovie;