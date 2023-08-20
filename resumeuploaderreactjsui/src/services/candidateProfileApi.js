import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const candidateProfileApi = createApi({
  reducerPath: 'candidateProfileApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
  endpoints: (builder) => ({
    PostRequest: builder.mutation({
      query: (candidate) => {
        return {
          url: 'resume/',
          method: 'POST',
          body: candidate
        }
      }
    }),
    GetRequest: builder.query({
      query: () => {
        return {
          url: 'list/',
          method: 'GET'
        }
      }
    }),
    GetRequestById: builder.query({
      query: (id) => {
        return {
          url: `list/${id}/`,
          method: 'GET'
        }
      }
    }),
    PutRequest: builder.query({
      query: ({ id, ...candidate }) => {
        return {
          url: `update/${id}/`,
          method: 'PUT',
          body: candidate
        }
      }
    }),
    DeleteRequest: builder.query({
      query: (id) => {
        return {
          url: `delete/${id}/`,
          method: 'DELETE'
        }
      }
    })
  }),
})

export const { usePostRequestMutation, useGetRequestQuery, useGetRequestByIdQuery, useDeleteRequestQuery, usePutRequestQuery } = candidateProfileApi