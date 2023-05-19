import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {
    return (
        <div className='mb-14 flex items-center justify-center'>
            <Tabs>
                <TabList className='text-center'>
                    <div className='flex gap-5'>
                        <Tab className='border'>Title 1</Tab>
                        <Tab className='border'>Title 2</Tab>
                        <Tab className='border'>Title 3</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita eos, accusantium fuga earum id laudantium animi possimus dolores aspe assumenda et.</p>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita eos, accusantium fuga earum id laudantium animi possimus dolores asperiores quia, ab sunt? Libero itaque perferendis accusamus possimus atque. Inventore repellat illo voluptate ea eos itaque ex quaerat repellendus, nam quibusdam praesentium ipsa dolorum ad illum pariatur. Tenetur, assumenda et.</p>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita eos, accusantium fuga earum id laudantium animi possimus dolores aspnda et.</p>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;