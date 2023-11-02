import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const MatLibEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="IsDelete" source="isDelete" />
        <TextInput label="MatName" source="matName" />
        <TextInput label="MatTag" source="matTag" />
      </SimpleForm>
    </Edit>
  );
};
