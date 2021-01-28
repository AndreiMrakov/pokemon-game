import React, {FC} from 'react';
import classnames from 'classnames';
import {LayoutProps} from "./Layout.types";
import styles from "./Layout.style.module.css";

export const Layout: FC<LayoutProps> = ({title, desc, bgColor, bgURL, id}) => {
	return (
		<section className={styles.root} id={id}>
			<div className={styles.wrapper}>
				<article>
					<div className={styles.title}>
						<h3>
							{`${title} ${id}`}
						</h3>
						<span className={styles.separator}/>
					</div>
					<div className={classnames(styles.desc, styles.full)}>
						<p>
							{`${desc} ${id}`}
						</p>
					</div>
				</article>
			</div>
		</section>
	);
};
