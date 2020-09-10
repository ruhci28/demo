import React from 'react';
import { ReferenceField, TextField, EmailField, List, Datagrid, } from 'react-admin';

export const CommentList = props => (
  <List {...props}>
      <Datagrid>
      <ReferenceField source="postId" reference="posts"><TextField source="id" /></ReferenceField>
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
      </Datagrid>
  </List>
);
