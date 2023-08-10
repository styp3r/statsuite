import SaleFiguresBox from './SaleFiguresBox'
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react';

const supabase = createClient('https://gweqbzdtgeuwhjoyknnc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3ZXFiemR0Z2V1d2hqb3lrbm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5OTMwOTMsImV4cCI6MjAwNjU2OTA5M30.fZHuFn5jUkiSSZeiegevqYAU_97MQN6wj_t6TioKcWk');

const Sales = () => {

    const [databtm, setDataBtm] = useState([]);
    const [dataec2, setDataEc2] = useState([]);
    const [datajbn, setDataJbn] = useState([]);
    const [dataorr, setDataOrr] = useState([]);
    const [datamll, setDataMll] = useState([]);
    const [dataddk, setDataDdk] = useState([]);
    const [datavtr, setDataVtr] = useState([]);
    const [dataknr, setDataKnr] = useState([]);
    const [datahmu, setDataHmu] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.rpc('fetch_data', {});
            if (error) {
                console.error('Error fetching data:', error.message);
            } else {

                setDataBtm(data.table1);
                setDataEc2(data.table2);
                setDataJbn(data.table3);
                setDataOrr(data.table4);
                setDataMll(data.table5);
                setDataDdk(data.table6);
                setDataVtr(data.table7);
                setDataKnr(data.table8);
                setDataHmu(data.table9);
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
                    <div className="sales-box">
                        <p>JBN</p>
                        {datajbn.map((row) => (
                            <SaleFiguresBox key={row.id} shop_name={row.shop_name} date={row.date} cash_sale={row.cash_sale} card_sale={row.card_sale} upi_sale={row.upi_sale} swiggy_sale={row.swiggy_sale} zomato_sale={row.zomato_sale} />
                        ))}
                    </div>
                    <div className="sales-box">
                        <p>ORR</p>
                        {dataorr.map((row) => (
                            <SaleFiguresBox key={row.id} shop_name={row.shop_name} date={row.date} cash_sale={row.cash_sale} card_sale={row.card_sale} upi_sale={row.upi_sale} swiggy_sale={row.swiggy_sale} zomato_sale={row.zomato_sale} />
                        ))}
                    </div>
                    <div className="sales-box">
                        <p>MLL</p>
                        {datamll.map((row) => (
                            <SaleFiguresBox key={row.id} shop_name={row.shop_name} date={row.date} cash_sale={row.cash_sale} card_sale={row.card_sale} upi_sale={row.upi_sale} swiggy_sale={row.swiggy_sale} zomato_sale={row.zomato_sale} />
                        ))}
                    </div>
                    <div className="sales-box">
                        <p>DDK</p>
                        {dataddk.map((row) => (
                            <SaleFiguresBox key={row.id} shop_name={row.shop_name} date={row.date} cash_sale={row.cash_sale} card_sale={row.card_sale} upi_sale={row.upi_sale} swiggy_sale={row.swiggy_sale} zomato_sale={row.zomato_sale} />
                        ))}
                    </div>
                    <div className="sales-box">
                        <p>VTR</p>
                        {datavtr.map((row) => (
                            <SaleFiguresBox key={row.id} shop_name={row.shop_name} date={row.date} cash_sale={row.cash_sale} card_sale={row.card_sale} upi_sale={row.upi_sale} swiggy_sale={row.swiggy_sale} zomato_sale={row.zomato_sale} />
                        ))}
                    </div>
                    <div className="sales-box">
                        <p>KNR</p>
                        {dataknr.map((row) => (
                            <SaleFiguresBox key={row.id} shop_name={row.shop_name} date={row.date} cash_sale={row.cash_sale} card_sale={row.card_sale} upi_sale={row.upi_sale} swiggy_sale={row.swiggy_sale} zomato_sale={row.zomato_sale} />
                        ))}
                    </div>
                    <div className="sales-box">
                        <p>HMU</p>
                        {datahmu.map((row) => (
                            <SaleFiguresBox key={row.id} shop_name={row.shop_name} date={row.date} cash_sale={row.cash_sale} card_sale={row.card_sale} upi_sale={row.upi_sale} swiggy_sale={row.swiggy_sale} zomato_sale={row.zomato_sale} />
                        ))}
                    </div>
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





    ---------SQL fetch data function in supabase SQL editor (stored procedure code):-------

    CREATE OR REPLACE FUNCTION fetch_data()
RETURNS JSONB AS $$
DECLARE
    table1_data JSONB;
    table2_data JSONB;
    table3_data JSONB;
    table4_data JSONB;
    table5_data JSONB;
    table6_data JSONB;
    table7_data JSONB;
    table8_data JSONB;
    table9_data JSONB;
    result JSONB;
BEGIN
    SELECT json_agg(row_to_json(t1.*))
    INTO table1_data
    FROM btm_2023 t1;

    SELECT json_agg(row_to_json(t2.*))
    INTO table2_data
    FROM ec2_2023 t2;

    SELECT json_agg(row_to_json(t3.*))
    INTO table3_data
    FROM jbn_2023 t3;

    SELECT json_agg(row_to_json(t4.*))
    INTO table4_data
    FROM orr_2023 t4;

    SELECT json_agg(row_to_json(t5.*))
    INTO table5_data
    FROM mll_2023 t5;

    SELECT json_agg(row_to_json(t6.*))
    INTO table6_data
    FROM ddk_2023 t6;

    SELECT json_agg(row_to_json(t7.*))
    INTO table7_data
    FROM vtr_2023 t7;

    SELECT json_agg(row_to_json(t8.*))
    INTO table8_data
    FROM knr_2023 t8;

    SELECT json_agg(row_to_json(t9.*))
    INTO table9_data
    FROM hmu_2023 t9;

    result := jsonb_build_object('table1', table1_data, 'table2', table2_data, 'table3', table3_data, 'table4', table4_data, 'table5', table5_data, 'table6', table6_data, 'table7', table7_data, 'table8', table8_data, 'table9', table9_data);
    RETURN result;
END;
$$ LANGUAGE plpgsql;

*/