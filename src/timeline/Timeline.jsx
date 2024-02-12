import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import List from "@mui/material/List";
import { useState, useEffect } from "react";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3000");
        const data = await response.json();
        setData(data);
        console.log(`data = ${JSON.stringify(data)}`);
        console.log(response);
        // const imageData = data.img.data;
        // const base64ImageData = Buffer.from(imageData).toString("base64");
        // const imgUrl = `data:image/png;base64,${base64ImageData}`; // Assuming the image format is PNG

        // Set the image source to the data URL
        document.getElementById("imgCard").src = data.imgUrl;
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);
  return (
    <List>
      <Card
        sx={{ maxWidth: 345 }}
        style={{ marginLeft: "600px", marginBottom: "40px" }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />

        <CardMedia
        id="imgCard"
          component="img"
          height="194"
          image={data.img}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card
        sx={{ maxWidth: 345 }}
        style={{ marginLeft: "600px", marginBottom: "40px" }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img
                src="https://images.hindustantimes.com/img/2022/10/21/1600x900/3876b416-5074-11ed-9b0c-d1cd99c27b9b_1666376319637.jpg"
                style={{ height: "40px", width: " 80px" }}
              />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Technical Guruji"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            "Lost in the glittering desert oasis of Dubai ✨ #DubaiDreams"
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card
        sx={{ maxWidth: 345 }}
        style={{ marginLeft: "600px", marginBottom: "40px" }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLZxse_7wU-2hm5A4VIQx7OQf305ucUjTzdCRd24hsg&s"
                style={{ height: "40px", width: "60px" }}
              />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="KS Choi"
          subheader="September 14, 2016"
        />

        <CardMedia
          component="img"
          height="194"
          image="https://mysuccessproject.in/wp-content/uploads/2022/10/MNC-in-India.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            "Connecting continents, empowering innovation. 🌐 The heartbeat of
            global success. #MNCMagic"
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card
        sx={{ maxWidth: 345 }}
        style={{ marginLeft: "600px", marginBottom: "40px" }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img
                src="data:image/jpeg;base64,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"
                style={{ height: "40px", width: "60px" }}
              />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Scout"
          subheader="September 14, 2016"
        />

        <CardMedia
          component="img"
          height="194"
          image="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1707523200&semt=sph"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            "Unleashing the beast within. 🐎💨 #MustangMusings"
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </List>
  );
}
