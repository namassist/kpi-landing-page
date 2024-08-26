"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Flora = {
  nama_latin: string;
  nama_lokal: string;
  "2020": string;
  "2021": string;
  "2022": string;
  "2023": string;
  "2024": string;
  iucn: string;
  cites: string;
  p: string;
};

export type Fauna = {
  nama_latin: string;
  nama_lokal: string;
  "2020": string;
  "2021": string;
  "2022": string;
  "2023": string;
  "2024": string;
  iucn: string;
  cites: string;
  p: string;
};

export const columns: ColumnDef<Flora>[] = [
  {
    accessorKey: "nama_latin",
    header: "Nama Latin",
  },
  {
    accessorKey: "nama_lokal",
    header: "Nama Lokal",
  },
  {
    accessorKey: "2020",
    header: "2020",
  },
  {
    accessorKey: "2021",
    header: "2021",
  },
  {
    accessorKey: "2022",
    header: "2022",
  },
  {
    accessorKey: "2023",
    header: "2023",
  },
  {
    accessorKey: "2024",
    header: "2024",
  },
  {
    accessorKey: "iucn",
    header: "IUCN",
  },
  {
    accessorKey: "cites",
    header: "CITES",
  },
  {
    accessorKey: "p",
    header: "P.106",
  },
];

export const columnKonservasi: ColumnDef<Fauna>[] = [
  {
    accessorKey: "nama_latin",
    header: "Nama Latin",
  },
  {
    accessorKey: "nama_lokal",
    header: "Nama Lokal",
  },
  {
    accessorKey: "2020",
    header: "2020",
  },
  {
    accessorKey: "2021",
    header: "2021",
  },
  {
    accessorKey: "2022",
    header: "2022",
  },
  {
    accessorKey: "2023",
    header: "2023",
  },
  {
    accessorKey: "2024",
    header: "2024",
  },
  {
    accessorKey: "iucn",
    header: "IUCN",
  },
  {
    accessorKey: "cites",
    header: "CITES",
  },
  {
    accessorKey: "p",
    header: "P.106",
  },
];
