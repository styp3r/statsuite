import SaleFiguresBox from './SaleFiguresBox'
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react';

const supabase = createClient('https://gweqbzdtgeuwhjoyknnc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3ZXFiemR0Z2V1d2hqb3lrbm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5OTMwOTMsImV4cCI6MjAwNjU2OTA5M30.fZHuFn5jUkiSSZeiegevqYAU_97MQN6wj_t6TioKcWk');

const Sales = () => {

    const [databtm, setDataBtm] = useState([]);
    const [dataec2, setDataEc2] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.rpc('fetch_data', {});
            if (error) {
                console.error('Error fetching data:', error.message);
            } else {

                setDataBtm(data.table1);
                setDataEc2(data.table2);
            }
        };


        fetchData();
    }, []);

    return (
        <div className="home-container">
            <div className="sales-main-container">
                <div className="top-section">
                    <div className="greeting-section">
                        <p>Sales</p>
                        <p>Sale figures of each outlet by</p>
                        <p>payment type and partner sale figures</p>
                    </div>
                </div>


                <div className="sales-body-container">
                    <div className="sales-box">
                        <p>BTM</p>
                        {databtm.map((row) => (
                            <SaleFiguresBox key={row.id} shop_name={row.shop_name} date={row.date} cash_sale={row.cash_sale} card_sale={row.card_sale} upi_sale={row.upi_sale} swiggy_sale={row.swiggy_sale} zomato_sale={row.zomato_sale} />
                        ))}
                    </div>
                    <div className="sales-box">
                    <p>EC2</p>
                        {dataec2.map((row) => (
                            <SaleFiguresBox key={row.id} shop_name={row.shop_name} date={row.date} cash_sale={row.cash_sale} card_sale={row.card_sale} upi_sale={row.upi_sale} swiggy_sale={row.swiggy_sale} zomato_sale={row.zomato_sale} />
                        ))}
                    </div>
                    <div className="sales-box"></div>
                    <div className="sales-box"></div>
                    <div className="sales-box"></div>
                    <div className="sales-box"></div>
                    <div className="sales-box"></div>
                    <div className="sales-box"></div>
                    <div className="sales-box"></div>
                </div>
            </div>
        </div>
    );
}

export default Sales;

/*

const [data, setData] = useState([]);
    //const [data2, setData2] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.rpc('fetch_data', {});
            if (error) {
                console.error('Error fetching data:', error.message);
            } else {

                setData(data.table1);
                //setData2(data.table2);
            }
        };


        fetchData();
    }, []);



                    {data.map((row) => (
                        <SaleFiguresBox key={row.id} shop_name={row.shop_name} date={row.date} cash_sale={row.cash_sale} card_sale={row.card_sale} upi_sale={row.upi_sale} swiggy_sale={row.swiggy_sale} zomato_sale={row.zomato_sale}/>
                    ))} 

                                        {/*data2.map((row) => (
                        <SaleFiguresBox key={row.id} shop_name={row.shop_name} />
                    ))}
*/