import { useEffect, useState } from 'react'
// styling
import { LayoutPage, Header } from '../../../layout';
import { TextField, Stack, Button } from '@mui/material';
// routing
import { useParams } from 'react-router-dom';
// types
import { DemoCrawlData } from '../../../../types';
// form control
import { useForm, Controller, useFieldArray } from 'react-hook-form';
// http request
import { baseUrl, getCrawlData, updateCrawlData } from '../../../lib/http-request';


const EditFormPage = () => {
    const [crawlData, setCrawlData] = useState<DemoCrawlData>({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async (url: string, id: any) => {
            const response = await getCrawlData(url, id);
            setCrawlData(response);
        }
        
        fetchData(baseUrl, id);
    }, []);

    const { control, handleSubmit, reset } = useForm({
        criteriaMode: 'all',
        defaultValues: {
            attributes: crawlData?.attributes
        }
    });

    // People try to change thing
    useEffect(() => {
        if (crawlData) {
            reset({ attributes: crawlData.attributes })
        }
    }, [crawlData])

    const { fields } = useFieldArray({
        control,
        name: "attributes",
    });

    // Update crawlData
    const handleOnSubmit = (data: DemoCrawlData) => {
        updateCrawlData(`${baseUrl}/${id}/`, data)
    }

    if (crawlData.name) {
        return (
            <LayoutPage>
                <Header title="form" category="app" />
                <Stack onSubmit={handleSubmit(handleOnSubmit)} 
                component="form" 
                sx={{ flexDirection: { md: 'row'}}} 
                marginTop="3rem" 
                gap={5} 
                flexDirection="row">
                    <Controller
                        name="url"
                        defaultValue={crawlData?.url}
                        control={control}
                        render={({ field }) =>
                            <TextField
                                size="small"
                                label="website url"
                                {...field}
                            />}
                    />
                    <Controller
                        name="name"
                        defaultValue={crawlData?.name}
                        control={control}
                        render={({ field }) =>
                            <TextField
                                size="small"
                                label="website name"
                                {...field}
                            />}
                    />

                    <Controller
                        name="description"
                        defaultValue={crawlData?.description}
                        control={control}
                        render={({ field }) =>
                            <TextField
                                size="small"
                                label="description"
                                {...field}
                            />}
                    />

                    <Button type="submit">Edit</Button>
                </Stack>
                <Stack>
                    {fields.map((item, index) =>
                        <>
                            <Controller
                                name={`attributes[${index}].key`}
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        size="small"
                                        label="key"
                                        {...field} />)}
                            />

                            <Controller
                                name={`attributes[${index}].value`}
                                control={control}

                                render={({ field }) => (
                                    <TextField
                                        size="small"
                                        label="value"
                                        {...field}

                                    />)}
                            />
                        </>
                    )}
                </Stack>
            </LayoutPage>
        )
    }
    else {
        return <p>

        </p>
    }
}

export default EditFormPage;