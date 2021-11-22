import React, { useState, useEffect } from 'react';
import services from '../network/services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useNavigate } from "react-router-dom";

const Add = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");
    const [filename, setFilename] = useState("");
    const [productId, setProductId] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(async () => {
        setProductId(params.id);
        await getById(params.id);
    }, [productId]);

    const getById = async (id) => {
        const response = await services.getById(id);
        if (response.status === 200) {
            const result = response.data.data;
            setTitle(result.title);
            setDescription(result.description);
            const exclude = result.photo.split("-", 2);
            const split = result.photo.split("-");
            const nameFile = split.filter((e) => !exclude.includes(e));
            setFilename(nameFile.toString().replace(",", "-"));
        }
    }

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
        let response;
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
        }
        if (file) {
            response = await services.update(title, description, file[0], productId);
        } else {
            response = await services.update(title, description, null, productId);
        }
        if (response.status === 200) {
            navigate(`/`);
        }
    }

    const back = () => {
        navigate(`/`);
    }

    return (
        <div className={"container"}>
            <ToastContainer />
            <form className={"form"} onSubmit={onSubmit}>
                <h2>Update Product</h2>
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
                    <span className={"bottom-10"}>
                        <button type={"submit"} className={"pure-button button-success btn-block"} >
                            Update
                        </button>
                    </span>

                    <button type={"button"} className={"pure-button button-danger btn-block"} onClick={back} >
                        Back
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Add;