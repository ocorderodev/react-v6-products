import React, { useState } from 'react';
import services from '../network/services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");
    const [filename, setFilename] = useState("");

    const onChange = (e) => {
        if (e.target.name === "title") setTitle(e.target.value);
        if (e.target.name === "description") setDescription(e.target.value);
        if (e.target.name === "upload") {
            setFile(e.target.files);
            const value = e.target.value;
            const split = value.split('\\');
            setFilename(split[split.length - 1]);
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (title === "" || description === "" || filename === "") {
            toast('Fields required', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                type: "info"
            });
        } else {
            const response = await services.add(title, description, file[0]);
            if (response.status === 200) {
                setTitle("");
                setDescription("");
                setFilename("");
                setFile("");
                toast('Product add successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    type: "success"
                });
            } else {
                toast('Error in add Product', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    type: "error"
                });
            }
        }
    }

    return (
        <div className={"container"}>
            <ToastContainer />
            <form className={"form"} onSubmit={onSubmit}>
                <h2>Add new Product</h2>
                <div className={"spacing"}>
                    <hr />
                </div>
                <div className={"form__div"}>
                    <input type={"text"} className={"form__input"} name={"title"} onChange={onChange} value={title} />
                    <label className={"form__label"} >Title</label>
                </div>

                <div className={"form__div"}>
                    <input type={"text"} className={"form__input"} name={"description"} onChange={onChange} value={description} />
                    <label className={"form__label"} >Description</label>
                </div>

                <div className={"button__wrapper"}>
                    <span className={"label"}>{filename}</span>
                    <input type={"file"} name={"upload"} id={"upload"} onChange={onChange} />
                    <label className={"form__label label__upload"} >Upload</label>
                </div>

                <div className={"form__div"}>
                    <button type={"submit"} className={"pure-button button-success btn-block"} >
                        New Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Add;