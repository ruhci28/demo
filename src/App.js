// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import AlbumIcon from '@material-ui/icons/Album';
import CommentIcon from '@material-ui/icons/Comment';

import { UserList } from './users';
import { PostList, PostEdit, PostCreate, PostShow } from './posts';
import { CommentList, CommentShow, CommentEdit, CommentCreate} from './comments';
import { AlbumList, AlbumEdit, AlbumShow, AlbumCreate } from './album.js';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" icon={UserIcon} list={UserList} />
        <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate} show={PostShow} />
        <Resource name="albums" icon={AlbumIcon} list={AlbumList} edit={AlbumEdit} show={AlbumShow} create={AlbumCreate} />
        <Resource name="comments" icon={CommentIcon} list={CommentList} show={CommentShow} edit={CommentEdit} create={CommentCreate} />
    </Admin>
);
export default App;
