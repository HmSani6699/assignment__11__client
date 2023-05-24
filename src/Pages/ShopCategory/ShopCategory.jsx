import { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const ShopCategory = () => {
    const { user } = useContext(AuthContext)
    const [categoris, setCategoris] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/tabToy')
            .then(res => res.json())
            .then(data => {
                setCategoris(data);
            })
    }, []);

    console.log(categoris);

    const handleModal = () => {

    }

    return (
        <div className='mb-14'>
            <Tabs>
                <div className='text-center mx-auto'>
                    <TabList>
                        {
                            categoris && categoris.map((categori, index) => (
                                <Tab key={index}>{categori.CategoryName}</Tab>
                            ))
                        }
                    </TabList>
                </div>

                <div className='justify-center flex mt-10'>
                    {
                        categoris && categoris.map((categori, i) => (
                            <TabPanel key={i}>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    {categori.toys.map((toy, i) => (
                                        <div key={i} className='flex gap-5 items-center border rounded-xl p-4 '>
                                            <img className='h-[200px]' src={toy.picture} alt="" />
                                            <div>
                                                <h2 className='text-3xl font-bold'>{toy.name}</h2>
                                                <p className='mt-1 '><span className='font-bold mt-3'>Price</span> : ${toy.price}</p>
                                                <p className='mt-1 mb-5 '><span className='font-bold'>Rting </span>{toy.rating}</p>

                                                {user ?
                                                    <label htmlFor="my-modal-3" onClick={() => handleModal(toy._id)} className="btn text-white bg-[#c2410c] btn-outline">View Details</label> : <Link to='/login'><button className="btn text-white bg-[#c2410c] btn-outline">View Details</button></Link>
                                                }

                                                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                                <div className="modal">
                                                    <div className="modal-box relative  w-[600px] ">
                                                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                        <div className="flex items-center justify-center ">
                                                            <img className="h-[200px] mb-4" src={toy.picture} alt="img nai" />
                                                        </div>
                                                        <div className='text-center'>
                                                            <h2 className='text-3xl font-bold'>{toy.name}</h2>
                                                            <p><span className='font-bold'>Price</span> : ${toy.price}</p>
                                                            <p><span className='font-bold'>Rting </span>{toy.rating}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                        ))
                    }
                </div>
            </Tabs>
        </div>
    );
};

export default ShopCategory;