# 📡 API Documentation

#### All endpoints require Bearer Token authentication after login (except login).


>#### 🔐 Include ```Authorization: Bearer <token>``` in request headers.

### ✅ Authentication

### ```POST /api/auth/login```

**Body:**
```
{
"email": "instructor@test.com",
"password": "password"
}
```
**Response**
```
{
    "token": "5|l2UmzoOAchecwzF7yrnp9DIwDwJfK9cmcVbMK24v74e1d1f4",
    "user": {
        "id": 1,
        "name": "Instructor John",
        "email": "instructor@test.com",
        "role": "student",
        "email_verified_at": "2025-07-18T06:38:47.000000Z",
        "created_at": "2025-07-18T06:38:48.000000Z",
        "updated_at": "2025-07-18T06:38:48.000000Z"
    }
}
```
<br>

## 📚 Courses

### ```GET /api/courses```

Returns a paginated list of all available courses.

Example Response:

```
{
        "id": 1,
        "name": "Minima.",
        "description": "Quis illum id ducimus sunt qui enim sint odit cupiditate eveniet incidunt magni et illo itaque sunt vitae placeat maiores nam fugit maxime ipsum odio earum ea sint qui ratione voluptas qui consequatur voluptatem atque praesentium modi ut distinctio libero ea et iure nemo animi id quis corrupti temporibus vero suscipit odit et et eaque vel possimus temporibus eos.",
        "price": "411.99",
        "instructor_id": 1,
        "status": "published",
        "created_at": "2025-07-18T06:38:48.000000Z",
        "updated_at": "2025-07-18T06:38:48.000000Z"
    },
    {
        "id": 2,
        "name": "Laborum.",
        "description": "Dolorum dolorem ipsam et non error nostrum dolor ducimus dolorem enim explicabo doloremque et sit unde commodi est nostrum reiciendis voluptatem minus ab suscipit debitis nostrum tempore placeat dolores cupiditate illo aperiam eius tenetur sed quam harum rerum qui maiores velit.",
        "price": "319.82",
        "instructor_id": 1,
        "status": "published",
        "created_at": "2025-07-18T06:38:48.000000Z",
        "updated_at": "2025-07-18T06:38:48.000000Z"
    },
    {
        "id": 3,
        "name": "Saepe.",
        "description": "Occaecati autem ipsum adipisci omnis dolore aut deserunt consequatur qui excepturi dolorum exercitationem excepturi nulla sit qui quis quaerat amet nobis ut vel voluptatibus qui facilis itaque sint quos corrupti quis et repellendus at aut dolores placeat sint quia eius omnis in at aut odit tenetur molestias natus voluptas esse laborum sint ea.",
        "price": "361.08",
        "instructor_id": 1,
        "status": "published",
        "created_at": "2025-07-18T06:38:48.000000Z",
        "updated_at": "2025-07-18T06:38:48.000000Z"
    }
}
```

### ```GET /api/courses/{id}```

Returns course details by ID.

Response:

```
{
    "id": 5,
    "name": "Voluptatum ea.",
    "description": "Beatae eligendi soluta nihil asperiores laborum error consequatur distinctio voluptatum minus maxime sit beatae velit et consequatur omnis blanditiis saepe expedita laborum incidunt sunt ipsam eveniet veritatis omnis sequi voluptate ut pariatur saepe eos ab quasi tempora et quasi non corrupti qui laborum deleniti enim aliquam corporis illo dolor at temporibus mollitia officiis quas et omnis facilis laboriosam rerum dolore quidem.",
    "price": "185.32",
    "instructor_id": 1,
    "status": "published",
    "created_at": "2025-07-18T06:38:48.000000Z",
    "updated_at": "2025-07-18T06:38:48.000000Z"
}
```

### 🎓 Enrollment
### ```POST /api/courses/{id}/enroll```

Enrolls authenticated student in a course.

Response:
```
{
  "message": "Enrolled successfully"
}

```