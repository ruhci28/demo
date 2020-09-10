import React from 'react';
import {Show, ShowButton, SimpleShowLayout, RichTextField, ReferenceField, TextField, EmailField, List, Datagrid, Edit, SimpleForm, TextInput, EditButton, ReferenceInput, SelectInput, Create } from 'react-admin';

export const CommentList = props => (
    <List {...props}>
        <Datagrid>
        <ReferenceField source="postId" reference="posts"><TextField source="id" /></ReferenceField>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export const CommentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput label="Post" source="postId" reference="posts">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="body" />
        </SimpleForm>
    </Create>
);

export const CommentEdit = props => (
    <Edit  {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput label="Posts" source="postId" reference="posts">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const CommentShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="postId" />
            <ReferenceField source="postId" reference="posts"><TextField source="title" /></ReferenceField>
            <TextField source="name" />
            <EmailField source="email" />
            <RichTextField source="body" />
        </SimpleShowLayout>
    </Show>
);
