import { Image } from '@components';
import styles from './Gallery.module.css';

export const Gallery = ({ info }) => {
  if (!info.gallery) return null;

  return (
    <section className={styles.gallery}>
      <h3><i>Gallery</i></h3>
      <div className={'row row-cols-1 row-cols-md-2'}>
        {info.gallery.map((item) => {
          return (
            <div
              className={styles.galleryItem}
              key={`info-gallery-item-${item.id}`}
            >
              <p>{item.name}</p>
              <p dangerouslySetInnerHTML={{ __html: item.description}} />
              <Image alt={item.name} src={item.attachment} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
