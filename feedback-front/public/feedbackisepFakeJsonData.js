const dataAuthorities = [
  {"username":"aadmin","authority":"ROLE_ADMIN"},
  {"username":"acanard","authority":"ROLE_STUDENT"},
  {"username":"adubernet","authority":"ROLE_TEACHER"},
  {"username":"aplatel","authority":"ROLE_TEACHER"},
  {"username":"aveloso","authority":"ROLE_STUDENT"},
  {"username":"ccisse","authority":"ROLE_STUDENT"},
  {"username":"eabgrall","authority":"ROLE_TEACHER"},
  {"username":"gfessar","authority":"ROLE_STUDENT"},
  {"username":"jleite","authority":"ROLE_TEACHER"},
  {"username":"jlemee","authority":"ROLE_TEACHER"},
  {"username":"ktan","authority":"ROLE_STUDENT"},
  {"username":"mnguyen","authority":"ROLE_TEACHER"},
  {"username":"mpepineau","authority":"ROLE_TEACHER"},
  {"username":"zkaziaoul","authority":"ROLE_TEACHER"}
]

const dataComments =  [
  {"id":"1","user_id":"1","course_id":"1","content":"Ce cOuRs eSt nUL. jAiMe pAs","date_time":"2019-05-21 13:02:00","number_like":"35","number_dislike":"0","parent_id":null}
]

const dataConversations = [
  {"id":"1","from_id":"2","to_id":"1","subject":"Mon cours est bien","status":"vous êtes virés","date_time":"2019-05-21 18:08:07"}
]

const dataCourses = [
  {"id":"1","teacher_id":"6","date_time":"2019-04-01 09:00:00","date_end":"2019-04-01 12:00:00","material_id":"5"},
  {"id":"2","teacher_id":"8","date_time":"2019-04-01 17:30:00","date_end":"2019-04-01 19:00:00","material_id":"4"},
  {"id":"3","teacher_id":"9","date_time":"2019-04-02 09:00:00","date_end":"2019-04-02 12:00:00","material_id":"6"},
  {"id":"4","teacher_id":"7","date_time":"2019-04-02 13:00:00","date_end":"2019-04-02 16:00:00","material_id":"1"},
  {"id":"5","teacher_id":"10","date_time":"2019-04-02 16:30:00","date_end":"2019-04-02 19:30:00","material_id":"3"},
  {"id":"6","teacher_id":"11","date_time":"2019-04-03 15:15:00","date_end":"2019-04-03 17:15:00","material_id":"7"},
  {"id":"7","teacher_id":"12","date_time":"2019-04-04 10:30:00","date_end":"2019-04-04 12:30:00","material_id":"8"},
  {"id":"8","teacher_id":"13","date_time":"2019-04-05 09:00:00","date_end":"2019-04-05 12:00:00","material_id":"2"}
]

const dataCourseDocuments = [
  {"id":"1","name":"Name Test","document":"Test","user_id":"1","course_id":"1"}
]

const dataCourseMaterials = [
  {"id":"1","name":"Genie logiciel"},
  {"id":"2","name":"Cybersecurite"},
  {"id":"3","name":"Architecture des SI"},
  {"id":"4","name":"Analyse Geopolitique"},
  {"id":"5","name":"Technologies Web"},
  {"id":"6","name":"Big Data"},
  {"id":"7","name":"Espagnol"},
  {"id":"8","name":"Anglais"}
]

const dataMessages = [
  {"id":"1","conversation_id":"1","is_from_sender":"1","content":"vous êtes virés","message_read":"1","date_time":"2019-05-21 18:08:07"}
]

const dataUsers = [
  {"id":"14","username":"aadmin","firstname":"admin","lastname":"admin","isep_id":"14","mail":"admin.admin@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#eeeeee","parent_id":null,"enabled":"1"},
  {"id":"3","username":"acanard","firstname":"Antoine","lastname":"Canard","isep_id":"3","mail":"kev@gmail.com","password":"{noop}secret","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#a6e590","parent_id":null,"enabled":"1"},
  {"id":"8","username":"adubernet","firstname":"Alice","lastname":"Dubernet","isep_id":"8","mail":"alice.dubernet@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#888888","parent_id":null,"enabled":"1"},
  {"id":"11","username":"aplatel","firstname":"Adriana","lastname":"Platel","isep_id":"11","mail":"adriana.platel@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#bbbbbb","parent_id":null,"enabled":"1"},
  {"id":"4","username":"aveloso","firstname":"Alex","lastname":"Veloso","isep_id":"4","mail":"alex.veloso@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#444444","parent_id":null,"enabled":"1"},
  {"id":"5","username":"ccisse","firstname":"Cameron","lastname":"Cisse","isep_id":"5","mail":"cameron.cisse@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#555555","parent_id":null,"enabled":"1"},
  {"id":"12","username":"eabgrall","firstname":"Emma","lastname":"Abgrall","isep_id":"12","mail":"emma.abgrall@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#cccccc","parent_id":null,"enabled":"1"},
  {"id":"1","username":"gfessar","firstname":"Gregoire","lastname":"Fessar","isep_id":"1","mail":"gregoire.fessard@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#111111","parent_id":null,"enabled":"1"},
  {"id":"10","username":"jleite","firstname":"Jean Charles","lastname":"Leite","isep_id":"10","mail":"jeancharles.leite@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#aaaaaa","parent_id":null,"enabled":"1"},
  {"id":"13","username":"jlemee","firstname":"Jacky","lastname":"Lemee","isep_id":"13","mail":"jacky.lemee@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#dddddd","parent_id":null,"enabled":"1"},
  {"id":"2","username":"ktan","firstname":"Kevin","lastname":"TAN","isep_id":"2","mail":"kevin.tan@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#222222","parent_id":null,"enabled":"1"},
  {"id":"6","username":"mnguyen","firstname":"Mathieu","lastname":"Nguyen","isep_id":"6","mail":"mathieu.nguyen@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#666666","parent_id":null,"enabled":"1"},
  {"id":"9","username":"mpepineau","firstname":"Maurice","lastname":"Pepineau","isep_id":"9","mail":"maurice.pepineau@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#999999","parent_id":null,"enabled":"1"},
  {"id":"7","username":"zkaziaoul","firstname":"Zakia","lastname":"Kaziaoul","isep_id":"7","mail":"zakia.kaziaoul@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#777777","parent_id":null,"enabled":"1"}
]

const dataUserCourses = [
  {"id":"1","user_id":"3","course_id":"1"},
  {"id":"2","user_id":"3","course_id":"2"},
  {"id":"3","user_id":"3","course_id":"3"},
  {"id":"4","user_id":"3","course_id":"4"},
  {"id":"5","user_id":"3","course_id":"5"},
  {"id":"6","user_id":"3","course_id":"6"},
  {"id":"7","user_id":"3","course_id":"7"},
  {"id":"8","user_id":"3","course_id":"8"}
]

