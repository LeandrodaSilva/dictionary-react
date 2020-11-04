import React, {useState, useEffect} from "react";
import "./styles.css";
import View from "../../components/View";
import dictionary from "../../services/dictionary";
import SessionStorage from "../../util/SessionStorage";
import {imageActions} from "../../store/imagesSlice";
import {useDispatch, useSelector} from "react-redux";
import {images_map} from "../../store/imagesSlice";
import ImageList from "../../components/ImageList";
import Button from "../../components/Button";

export default function PostsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const imgs = useSelector(images_map);
  const dispatch = useDispatch();

  useEffect(
    () => {
      async function getFiles() {
        if (isLoading || !imgs) {
          return;
        }

        setIsLoading(true);

        try {
          const resp = await dictionary.get('file',
            {
              headers: {
                'Authorization': 'Bearer ' + SessionStorage.getSession(),
              }
            }
          );
          dispatch(imageActions.setImages(resp.data));
        } catch (error) {
          console.log(error);
        }
        setIsLoading(false);
      }
      getFiles();
    },
    [dispatch, imgs, isLoading],
  );

  return (
    <View>
      <div className="container-posts">
        <form>
          <label htmlFor="posts-img">Choose a picture:</label>
          <input id="posts-img" type="file" name="file" />
          <Button text="Send" />
        </form>
        {imgs.length ? <ImageList /> : null}
      </div>
    </View>
  )
}
