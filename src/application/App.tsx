import React from 'react';
import {Header} from "@/components/Header";
import {Layout} from "@/components/Layout";
import {Footer} from "@/components/Footer";
import Bg1 from "@/assets/images/bg1.jpg";
import Bg3 from "@/assets/images/bg3.jpg";
import {LayoutProps} from "@/components/Layout/Layout.types";

const layouts: LayoutProps[] = [
    {
        id: '1',
        title: 'Title',
        desc: 'Description',
        bgURL: Bg1
    },
    {
        id: '2',
        title: 'Title',
        desc: 'Description',
        bgColor: 'red'
    },
    {
        id: '3',
        title: 'Title',
        desc: 'Description',
        bgURL: Bg3
    },

]

export function App() {
  return (
    <>
      <Header
          title={'Pokemon game'}
          desc={'First homework'}
      />
        {
            layouts.map(layout=> (
                <Layout
                    key={layout.id}
                    {...layout}
                />
            ))
        }
      <Footer />
    </>
  );
}
