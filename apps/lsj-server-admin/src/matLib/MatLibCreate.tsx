import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const MatLibCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="IsDelete" source="isDelete" />
        <TextInput label="MatName" source="matName" />
        <TextInput label="MatTag" source="matTag" />
      </SimpleForm>
    </Create>
  );
};
