import React, { Fragment } from 'react';

const List = ({ product, deleted, getById }) => {

    return (
        <Fragment>
            <div className={"card"}>
                <div className={"card__header"}>
                    <img src={window.location.href + "/storages/" + product.photo } alt="card__image" className={"card__image"} />
                </div>
                <div className={"card__body"}>
                    <span>{product.title}</span>
                    <label>{product.description}</label>
                </div>
                <div className={"card__footer align__center__justify__content"}>
                    <span>
                        <button className={"pure-button btn-update"} onClick={() => {getById(product._id)}}>Update</button>
                    </span>
                    <span className={"pd__left_button"}>
                        <button className={"pure-button btn-delete"} onClick={() => {deleted(product._id)}}>Delete</button>
                    </span>
                </div>
            </div>
        </Fragment>
    );
};

export default List;