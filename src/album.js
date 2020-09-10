import  React from 'react';
import {
    List,
    Datagrid,
    ReferenceField,
    TextField
} from 'react-admin';

export const AlbumList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
        </Datagrid>
    </List>
);
