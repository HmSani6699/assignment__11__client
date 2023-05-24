import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {

    const [categoris,setCategoris] =useState();
    
    useEffect(()=>{
        fetch('http://localhost:5000/tabToy')
        .then(res=>res.json())
        .then(data=>{
            setCategoris(data);
        })
    },[]);

    console.log(categoris);

    return (
        <div className='mb-14'>
            <Tabs>
                <div className='text-center'>
                    <TabList>
                        {
                            categoris&&categoris.map((categori,index)=>(
                                <Tab key={index}>{categori.CategoryName}</Tab>
                            ))
                        }
                    </TabList>
                </div>

                <div className='justify-center flex'>
                    {
                        categoris&&categoris.map((categori,i)=>(
                           <TabPanel key={i}>
                            {categori.toys.map((toy,i)=>(
                                <div key={i}>
                                     <img src={toy.picture} alt="" />
                                </div>
                            ))}
                           </TabPanel> 
                        ))
                    }
                </div>
            </Tabs>
        </div>
    );
};

export default ShopCategory;