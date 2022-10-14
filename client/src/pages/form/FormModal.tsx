import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";

import { AiFillCloseCircle } from "react-icons/ai";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Divider,
  TextField,
  Stack,
} from "@mui/material";

interface Props {
  activeDialog: boolean,
  handleActiveDialog: React.Dispatch<React.SetStateAction<boolean>>,
  handleSubmitData: (data: any, e: any) => void,
  color?: string
}

const FormModal = ({
  activeDialog,
  handleActiveDialog,
  handleSubmitData,
  color
}: Props) => {
  // handle form with react-hook-form
  const { register, handleSubmit, control } = useForm({});

  const { fields, append, remove } = useFieldArray({
    control,
    name: "selector",
  });

  return (
    <Dialog sx={{color}} onClose={handleActiveDialog} open={activeDialog}>
      <DialogTitle>Add Config</DialogTitle>
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
            name="url"
            defaultValue={`example class`}
            render={(field) => (
              <TextField 
                size="small"
                required 
                label="website" 
                {...register('url')} />
            )}
          />
          {fields.map((item, index) => (
            <Stack flexDirection="row" gap={3} justifyContent="space-between">
              <Controller
                control={control}
                defaultValue={``}
                name={`selector[${index}].key`}
                render={(field) => (
                  <TextField
                    sx={{color: color}}
                    size="small"
                    required
                    label="key"
                    {...register(`selector[${index}].key`)}
                  />
                )}
              />
              <Controller
                control={control}
                defaultValue={``}
                name={`selector[${index}].value`}
                render={(field) => (
                  <TextField
                    size="small"
                    required
                    label="value"
                    {...register(`selector[${index}].value`)}
                  />
                )}
              />
              <Button sx={{fontSize: '2rem', color}} onClick={() => remove(index)}>
                <AiFillCloseCircle />
              </Button>
            </Stack>
          ))}
          <Button type="submit">Submit</Button>
        </Stack>
        <Divider variant="middle" />
        <DialogActions>
          <Button
            onClick={() => {
              append({ key: "", value: "" });
            }}
          >
            Add Field
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
