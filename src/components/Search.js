import {
    createStyles,
    fade,
    makeStyles,
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { graphql, navigate, useStaticQuery } from "gatsby";


const useStyles = makeStyles((theme) =>
    createStyles({
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
            // minWidth: '50ch',
        },
        textField: {
            backgroundColor: fade(theme.palette.common.white, 0.15),
            borderRadius: theme.shape.borderRadius,
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            color: 'inherit',

        },
        bar: {
            width: '100%', 
            position: 'relative', 
            [theme.breakpoints.up('sm')]: {
                width: '100%',
            },
            [theme.breakpoints.down('xs')]: {
                // backgroundColor: 'red',
                width: '100%',
            }
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
        //     // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        //     // transition: theme.transitions.create('width'),
        //     width: '80ch',
        //     [theme.breakpoints.up('sm')]: {
        //         width: '120ch',
        //         '&:focus': {
        //             width: '80ch',
        //         },
        //     },
        },
    })
);


export default function Search() {
    const classes = useStyles();
            //   filter: { frontmatter: { tag: { eq: "blog" } } }

    const { edges: posts } = useStaticQuery(
        graphql`
          query Search {
            allMdx(
              sort: { fields: frontmatter___date, order: DESC }
            ) {
              edges {
                node {
                  id
                  excerpt
                  frontmatter {
                    title
                    slug
                    date
                    image
                    position
                  }
                }
              }
            }
          }
        `
    ).allMdx;


    return (
        <div className={classes.bar}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                onChange={(event, value) => navigate("/" + value.node.frontmatter.slug)}
                options={posts}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                getOptionLabel={
                    (option) => (
                    option.node.frontmatter.position ? 
                    `${option.node.frontmatter.title}: ${option.node.frontmatter.position }`:
                    option.node.frontmatter.title)
                }
                renderInput={(params) => {
                    const { InputLabelProps, InputProps, ...rest } = params;
                    return (

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase {...params.InputProps} {...rest}
                                placeholder="Search..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                    )
                }}
            />
        </div>
    );
}