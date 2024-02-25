// lib/sanity.ts

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";


export const client = createClient({
    projectId: 't5upc31k',
    dataset: 'production',
    useCdn: true, // not important
    apiVersion: '2023-06-12'
})

const builder = imageUrlBuilder(client);

export function urlForImage(source: SanityImageSource) {
    return builder.image(source)
}