import  React from 'react';
import {
    Show,
    ShowButton,
    SimpleShowLayout,
    List,
    Edit,
    Create,
    Datagrid,
    ReferenceField,
    TextField,
    EditButton,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
} from 'react-admin';

export const AlbumList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);


export const AlbumEdit = props => (
    <Edit  {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
);

export const AlbumCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);

export const AlbumShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
        </SimpleShowLayout>
    </Show>
);
