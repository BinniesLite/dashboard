import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";

import { AiFillCloseCircle } from "react-icons/ai";
import CloseButton from '../../ui/CloseButton';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Divider,
  TextField,
  Stack,
  Box
} from "@mui/material";

interface Props {
  activeDialog: boolean,
  handleActiveDialog: MouseEventHandler<HTMLAnchorElement>,
  handleSubmitData: (data: any, e: any, action: string) => void,
  color?: string
}

const FormModal = ({ activeDialog, handleActiveDialog, handleSubmitData, color }: Props) => {
  // handle form with react-hook-form
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    criteriaMode: 'all'
  });


  const { fields, append, remove } = useFieldArray({
    control,
    name: "attributes",
  });


  return (
    <Dialog sx={{ color }} onClose={handleActiveDialog} open={activeDialog}>
      <DialogTitle>
        <Stack width="full" flexDirection="row" justifyContent="space-between">
          <Box>
            Add Config
          </Box>
          <Button onClick={handleActiveDialog}>
            <CloseButton />
          </Button>
        </Stack>
      </DialogTitle>
      <Divider variant="middle" />
      <DialogContent>
        <Stack
          onSubmit={handleSubmit(handleSubmitData)}
          component="form"
          sx={{ width: "500px" }}
          flexDirection="column"
          rowGap={4}
        >
          <Controller
            control={control}
            name="name"
            defaultValue={``}
            render={(field) => (
              <TextField
                error={Object.keys(errors).length === 0 ? false : true}
                size="small"

                label="website url"
                {...register('name',
                  {
                    required: "This is required",
                    pattern: {
                      value: /^(ftp|http|https):\/\/[^ "]+$/,
                      message: 'Please input a valid url'
                    }
                  }
                )} />
            )}
          />

          <Controller
            control={control}
            name="url"
            defaultValue={``}
            render={(field) => (
              <TextField
                error={Object.keys(errors).length === 0 ? false : true}
                size="small"

                label="website name"
                {...register('url',
                  {
                    required: "This is required",
                    pattern: {
                      value: /(.*?)/,
                      message: 'Please input a valid name'
                    }
                  }
                )} />
            )}
          />


          <Controller
            control={control}
            name="description"
            defaultValue={``}
            render={(field) => (
              <TextField
                error={errors.description ? true : false}
                size="small"

                label="description"
                {...register('description',
                  {
                    required: "This is required 2",
                    pattern: {
                      value: /(.*?)/,
                      message: 'This field is required'
                    }
                  }
                )} />
            )}

          />
          {fields.map((item, index) => (
            <Stack flexDirection="row" gap={3} justifyContent="space-between">
              <Controller
                key={item.id}
                control={control}
                defaultValue={``}
                name={`attributes[${index}].key`}
                render={(field) => (
                  <TextField
                    sx={{ color: color }}
                    size="small"
                    required
                    label="name"
                    {...register(`attributes[${index}].key`)}
                  />
                )}
              />
              <Controller
                key={item.id}
                control={control}
                defaultValue={``}
                name={`attributes[${index}].value`}
                render={(field) => (
                  <TextField
                    size="small"
                    required
                    label="value"
                    {...register(`attributes[${index}].value`)}
                  />
                )}
              />
              <Button sx={{ fontSize: '2rem', color }} onClick={() => remove(index)}>
                <AiFillCloseCircle />
              </Button>
            </Stack>
          ))}
          <Stack flexDirection="row" justifyContent="flex-end" gap={2} >
            <Button
              onClick={() => {
                append({ key: "", value: "" });
              }}
            >
              Add Field
            </Button>
            <Button type="submit">Save</Button>
          </Stack>
        </Stack>

      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
