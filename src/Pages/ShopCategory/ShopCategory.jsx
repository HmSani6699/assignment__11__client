import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {
    return (
        <div className='mb-14'>
            <Tabs>
                <div className='text-center'>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                        <Tab>Title 3</Tab>
                    </TabList>
                </div>

                <div className='justify-center flex'>
                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default ShopCategory;