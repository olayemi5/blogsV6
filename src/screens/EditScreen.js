import React,{useState, useContext} from "react";
import {Text, View, StyleSheet, TextInput} from 'react-native';
import { Context } from "../context/BlogContext";
import BlogPostForm from "../context/components/BlogPostForm";

const EditScreen = ({ navigation,route }) => {

    const { state,editBlogPost } = useContext(Context)

    const {id} = route.params
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return <BlogPostForm 
                onSubmit={( title, content) => {
                    editBlogPost(title,content,id, () => navigation.pop())
                }} 
                initialValues={{title:blogPost.title, content:blogPost.content}}
            />
}

const style = StyleSheet.create({});

export default EditScreen;