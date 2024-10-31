/*
*******************************************
*   Editora: Casa do C�digo               *
*   Livro..: MySQL do b�sico ao Avan�ado  *
*   ISBN...:                              *  
*   Autor..: Vinicius Carvalho de Souza   *
*******************************************

Arquivo: scripts_consultas_uteis.sql

*/

 
## Verificar a vers�o do MySQL
mysql> show variables like 'version%';

## para consultar os usuarios criados 
mysql> select user,	host 
			  from mysql.user;

## update no usuario do banco de dados
mysql> UPDATE mysql.user SET Password=PASSWORD('NomeSenha') WHERE User='root';
mysql> FLUSH PRIVILEGES; 