import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import List from '../components/List';
import services from '../network/services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const [products, setProducts] = useState("");
    const navigate = useNavigate();

    useEffect(async () => {
        await getAll();
    }, [products]);

    const getAll = async () => {
        const response = await services.getAll();
        if (response.status === 200) {
            setProducts(response.data.data);
        }
    }

    const deleted = async (id) => {
        const response = await services.deleted(id);
        if (response.status === 200) {
            await getAll();
            toast('Product deleted', {
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
        }
    }

    const getById = async (id) => {
        navigate(`/edit/${id}`);
    }

    return (
        (
            <Fragment>
                <div className={"container"}>
                    <ToastContainer />
                    {
                        (products.length > 0)
                            ?
                            products.map((e, i) => (
                                <List key={i} product={e} deleted={deleted} getById={getById} />
                            ))
                            :
                            <div className={"text-center"}>
                                <h3>Products, no records</h3>
                            </div>
                    }
                </div>
            </Fragment>
        )
    );
};

export default Home;