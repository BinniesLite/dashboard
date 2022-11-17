import { useEffect, useState } from 'react'
import { LayoutPage, Header } from '../../layout';
import { baseUrl, getCrawlData } from '../../utils/http-request';
import { useParams } from 'react-router-dom';
import { TextField, Stack, Button } from '@mui/material';
import { DemoCrawlData } from '../../../types';

const EditForm = () => {
    const [crawlData, setCrawlData] = useState<DemoCrawlData>({});
    const { id } = useParams();

    useEffect(() => {
        const fetchDataID = async (url: string, id: any) => {
            const response = await getCrawlData(url, id); 
            setCrawlData(response);        
        }

        fetchDataID(baseUrl, id);
    }, []);
    
    if (crawlData.name) {
        return (
            <LayoutPage>
            <Header title="form" category="app" />
            <Stack sx={{flexDirection: {md:'row'}}} marginTop="3rem" gap={5} flexDirection="row">
                <TextField 
                    size="small"
                    name="url"
                    label="website url"
                    defaultValue={`${crawlData?.url || 'Hit me'}`}
                />
                <TextField 
                    size="small"
                    label="name"
                    name="thingies"
                    defaultValue={`${crawlData?.name}`}
                />
            </Stack>
        </LayoutPage>
    ) }
    else {
        return <p>
            
        </p>
    }
}

export default EditForm;