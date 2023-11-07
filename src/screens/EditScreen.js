import React,{useState, useContext} from "react";
import {Text, View, StyleSheet, TextInput} from 'react-native';
import { Context } from "../context/BlogContext";
import BlogPostForm from "../context/components/BlogPostForm";

const EditScreen = ({ route }) => {

    const { state } = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === route.params.id)

    const [title, setTitle] = useState(blogPost.title)
    const [content, setContent] = useState(blogPost.content)

    return <BlogPostForm onSubmit={(title,content) => {
        console.log(title,content)
    }} initialValues={{title:blogPost.title, content:blogPost.content}}/>
}

const style = StyleSheet.create({});

export default EditScreen;