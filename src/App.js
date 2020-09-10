// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import AlbumIcon from '@material-ui/icons/Album';
import CommentIcon from '@material-ui/icons/Comment';

import { UserList } from './users';
import { PostList } from './posts';
import { AlbumList } from './album.js';
import { CommentList } from './comments';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" icon={UserIcon} list={UserList} />
        <Resource name="posts" icon={PostIcon} list={PostList} />
        <Resource name="albums" icon={AlbumIcon} list={AlbumList} />
        <Resource name="comments" icon={CommentIcon} list={CommentList} />
    </Admin>
);
export default App;
